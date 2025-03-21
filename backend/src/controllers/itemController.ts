import { Request, Response } from 'express';
import Item from '../models/Item';
import { generateRandomCode } from '../utils/generateCode';

export const getItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};

export const createItem = async (req: Request, res: Response) => {
  const { category, stack, in: inDate, out } = req.body;

  try {
    const code = generateRandomCode();

    const newItem = new Item({ code, category, stack, in: inDate, out });
    await newItem.save();

    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err });
  }
};