import ScannerParameters from "./components/form/ScannerParameters"

export const submitForm = (formData: ScannerParameters) => {
    return fetch(import.meta.env.VITE_BASE_URL + "submitForm",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
}