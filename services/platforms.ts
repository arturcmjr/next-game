export interface IPlatform {
  id: number;
  name: string;
}

export const storePlatform = (platform: IPlatform | undefined): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("platform", JSON.stringify(platform));
  }
};

export const getStoredPlatform = (): IPlatform | undefined => {
  if (typeof window !== "undefined") {
    const platform = localStorage.getItem("platform");
    if (platform) {
      return JSON.parse(platform);
    }
  }
  return undefined;
};
