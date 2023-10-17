import { Request, Response } from 'express'; // Assuming you're using Express.js
import { Model, Op } from 'sequelize';
import { ModelStatic, WhereOptions } from 'sequelize/types';

// Define the controller for two models
interface BaseController {
  model: ModelStatic<Model>;
}

// Create and Save a new record
export const createRecord = ({ model }: BaseController) => async (
  req: Request,
  res: Response
) => {
  try {
    // Validate request
    if (!req.body.title) {
      return res.status(400).json({ message: 'Content can not be empty!' });
    }

    // Create a record
    const newRecord = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false,
    };

    // Save the record in the database
    const createdRecord = await model.create(newRecord);
    return res.status(201).json(createdRecord);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message || 'Some error occurred while creating the record.',
      });
    }
    return res.status(500).json({
      message: 'Some error occurred while creating the record.',
    });
  }
};

// Retrieve all records
export const findAllRecords = ({ model }: BaseController) => async (
  req: Request,
  res: Response
) => {
  try {
    const title = req.query.title as string | undefined;
    const condition: WhereOptions = title
      ? { title: { [Op.like]: `%${title}%` } }
      : {};

    const records = await model.findAll({ where: condition });
    return res.status(200).json(records);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({
        message: error.message || 'Some error occurred while retrieving records.',
      });
    }
    return res.status(500).json({
      message: 'Some error occurred while retrieving records.',
    });
  }
};

// Find a single record by ID
export const findRecordById = ({ model }: BaseController) => async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  try {
    const record = await model.findByPk(id);
    if (record) {
      return res.status(200).json(record);
    } else {
      return res.status(404).json({ message: `Record with id ${id} not found.` });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message || `Error retrieving record with id ${id}` });
    }
    return res.status(500).json({ message: `Error retrieving record with id ${id}` });
  }
};

// Update a record by ID
export const updateRecord = ({ model }: BaseController) => async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  try {
    const [num, updatedRecord] = await model.update(req.body, {
      where: { id },
      returning: true,
    });

    if (num && num === 1) {
      return res.status(200).json({ message: 'Record was updated successfully.', updatedRecord });
    } else {
      return res.status(404).json({
        message: `Cannot update record with id ${id}. Maybe the record was not found or req.body is empty!`,
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message || `Error updating record with id ${id}` });
    }
    return res.status(500).json({ message: `Error updating record with id ${id}` });
  }
};

// Delete a record by ID
export const deleteRecord = ({ model }: BaseController) => async (
  req: Request,
  res: Response
) => {
  const id = Number(req.params.id);

  try {
    const num = await model.destroy({
      where: { id },
    });

    if (num && num === 1) {
      return res.status(200).json({ message: 'Record was deleted successfully!' });
    } else {
      return res.status(404).json({ message: `Cannot delete record with id ${id}. Maybe the record was not found!` });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message || `Could not delete record with id ${id}` });
    }
    return res.status(500).json({ message: `Could not delete record with id ${id}` });
  }
};