import { boxplotResult } from "../types/boxplotResult";
import boxplotDB from "../db/boxplotDB";

const boxplotDBInstance = new boxplotDB();

class boxplotController {
  async getBoxplot(): Promise<boxplotResult> {
    const data = await boxplotDBInstance.getData();
    const sorted = [...data].sort((a, b) => a - b);

    const median = this.getMedian(sorted);
    const lowerHalf = sorted.slice(0, Math.floor(sorted.length / 2));
    const upperHalf = sorted.slice(Math.ceil(sorted.length / 2));
    const q1 = this.getMedian(lowerHalf);
    const q3 = this.getMedian(upperHalf);

    const iqr = q3 - q1;
    const lowerFence = q1 - 1.5 * iqr;
    const upperFence = q3 + 1.5 * iqr;
    
    const outliers = sorted.filter(n => n < lowerFence || n > upperFence);

    return {
      min: sorted[0],
      q1,
      median,
      q3,
      max: sorted[sorted.length - 1],
      outliers
    };
  }

  
  private getMedian(arr: number[]): number {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0
      ? (arr[mid -1] + arr[mid]) / 2
      : arr[mid];
  }
}

export default boxplotController;