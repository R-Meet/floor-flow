
export const asyncHandler = async <T>(
  callback: () => Promise<T>
): Promise<T | undefined> => {
  
  try {
    
   return await callback();

  } catch {
    return undefined;
  }

}