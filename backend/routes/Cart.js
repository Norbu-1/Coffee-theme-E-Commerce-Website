const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get cart items for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({ message: 'Cart is empty!' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add item to cart
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.post('/remove', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart is empty!' });
    }

    // Find the index of the item in the cart
    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Get the item
    const item = cart.items[itemIndex];

    if (quantity === 0) {
      // Remove the item from the cart
      cart.items.splice(itemIndex, 1);
    } else {
      // Decrease the item's quantity
      item.quantity -= quantity;
      cart.items[itemIndex] = item;
    }

    // Save the updated cart
    if (cart.items.length === 0) {
      // Delete the cart if it's empty
      await Cart.deleteOne({ userId });
    } else {
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/update', authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.userId;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item from cart if quantity is zero or less
        cart.items.splice(itemIndex, 1);
      } else {
        // Update the quantity
        cart.items[itemIndex].quantity = quantity;
      }
    } else {
      if (quantity > 0) {
        // Add item to cart if it does not exist and quantity is positive
        cart.items.push({ productId, quantity });
      } else {
        return res.status(400).json({ message: 'Invalid quantity' });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error updating item in cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
