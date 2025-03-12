import { Request, Response } from "express";
import { createResourceH, listResourcesH, getResourceH, updateResourceH, deleteResourceH } from "../models/resource.model";

// Create a new resource
export const createResource = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const resource = await createResourceH(name, description);
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// List all resources
export const listResources = async (req: Request, res: Response) => {
  try {
    const resources = await listResourcesH();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a single resource
export const getResource = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID format" });
      return;
    }

    const resource = await getResourceH(id);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }

    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Update a resource
export const updateResource = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      res.status(400).json({ message: "Invalid ID format" });
      return;
    }

    const { name, description } = req.body;
    if (!name || !description) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const resource = await updateResourceH(id, name, description);
    if (!resource) {
      res.status(404).json({ message: "Resource not found" });
      return;
    }

    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Delete a resource
export const deleteResource = async (req: Request, res: Response): Promise<void> => {
  try {
    await deleteResourceH(Number(req.params.id));
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};