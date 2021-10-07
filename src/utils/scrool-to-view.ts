export const ScroolIntoView = (id: string) => {
    const titleElement = document.getElementById(id)
    titleElement.scrollIntoView({ behavior: "smooth" })
}