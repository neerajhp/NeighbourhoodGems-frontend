//Import Data models
import { landmarkType } from "../components/landmark/landmark";
import { requests } from "./helpers";

/**
 * Global API
 *
 * @author Neeraj Patel
 */

/** Landmarks */
export const Landmark = {
  getAll: (): Promise<landmarkType[]> => {
    return requests.get("/landmarks/all");
  },
};
