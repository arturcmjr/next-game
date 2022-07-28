export type ImageType = 'cover_small'|'screenshot_med'|'cover_big'|'logo_med'|'screenshot_big'|'screenshot_huge'|'thumb'|'micro'|'720p'|'1080p';

export const getIgdbImageUrl = (imageId: number, imageType: ImageType = 'thumb') : string => {
  return `https://images.igdb.com/igdb/image/upload/t_${imageType}/${imageId}.jpg`;
}