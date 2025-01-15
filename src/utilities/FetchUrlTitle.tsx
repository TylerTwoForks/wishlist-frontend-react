


export async function FetchUrlTitle(externalUrl: string): Promise<Map<String, String>> {
    let urlPreviewMap = new Map<String, String>;
    try {
        const response = await fetch(externalUrl);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        urlPreviewMap.set("title", doc.querySelector('title')?.textContent || '');
        urlPreviewMap.set("description", doc.querySelector('meta[name="description"]')?.getAttribute('content') || '');
        urlPreviewMap.set("image", doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '');

        return urlPreviewMap
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message); // Safe to access 'message' property
            return urlPreviewMap.set("error", error.message);
        } else {
            console.error("An unknown error occurred.");
            return urlPreviewMap.set("error", "An unknown error occurred.");
        }
    }
}