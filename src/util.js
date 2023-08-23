import axiosRetry from "axios-retry";
import axios from "axios";

axiosRetry(axios, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 2000; // time interval between retries
  },
  retryCondition: (error) => {
    return axiosRetry.isRetryableError(error) || error.response.status >= 500;
  },
});

export const handleHttpRequest = async(config) => {
    return await axios(config)
}
