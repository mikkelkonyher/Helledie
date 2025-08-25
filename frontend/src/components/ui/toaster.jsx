// This file previously depended on hooks/use-toast, but the toast system is not used anywhere.
// Export a no-op Toaster to avoid bundling unused code and allow safe removal of the hooks folder.
export function Toaster() {
  return null;
}
