import axios from "axios";
import { API_BASE_URL } from "../constants";

/**
 * Configuration file for Axios
 *
 * @author Neeraj Patel
 */

export default axios.create({
  baseURL: API_BASE_URL,
});
