import axios from "./config";

//Import Data models
import { landmarkType } from "../models/landmark";

/**
 * Global API
 *
 * @author Neeraj Patel
 */

/** Landmarks */
export const Landmark = {
  getAll: (): Promise<landmarkType[]> => {
    return axios.get("/landmarks/all");
  },
};
