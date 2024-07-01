const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000", { mode: "no-cors" })
    if (!response.ok) {
      throw new Error(`Failed to fetch data with status ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

document.getElementById("fetch-btn")?.addEventListener("click", fetchData)
