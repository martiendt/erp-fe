export function useHttpUser() {
  const readAll = () => {
    return {
      users: [],
      pagination: {
        page: 1,
      },
    }
  }
  return {
    readAll,
  }
}
