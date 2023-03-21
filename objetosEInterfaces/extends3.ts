function s<tipo extends Element>(selector:string):tipo | null {
    return document.querySelector(selector)
    }
    
    const link = s<HTMLAnchorElement>("a")?.href
    
    console.log(link)
    
    async function getData<tipoData>(url:string): Promise<tipoData> {
        const response = await fetch(url)
        return await response.json()
    }
    
    interface Notebook {
        nome:String,
        preco:number
    
    }
    
        async function handleData() {
            const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json")
            console.log(notebook.preco)
        }
    
        handleData()