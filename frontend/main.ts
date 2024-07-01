const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000")
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const fetchBtn = document.querySelector("button")
fetchBtn?.addEventListener("click", fetchData)
