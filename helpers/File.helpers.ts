import fs from "fs/promises";

/**
 * Utility functions for file operations.
 */
export class FileHelper {
  static async exists(path: string): Promise<boolean> {
    try {
      await fs.access(path);
      return true;
    } catch {
      return false;
    }
  }
  static ls = async (
    path: string,
    filterOutList: string[] = [],
  ): Promise<string[]> =>
    (await fs.readdir(path)).filter((f) => !filterOutList.includes(f));

  static async read(path: string): Promise<string> {
    const fileContents = await fs.readFile(path, "utf-8");
    return fileContents;
  }

  static async write(path: string, content: string) {
    fs.writeFile(path, content);
  }

  static async mkdir(path: string) {
    await fs.mkdir(path, { recursive: true });
  }
}
