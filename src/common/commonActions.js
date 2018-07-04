import axios from 'axios'
const LOGOS_PATH  = '../assets/static/images/color'
export function checkLogoExists(symbols){
    return (dispatch)=>{
        let resp =[]
        symbols.forEach(async(symbol,i) => {
            try{
                await axios.get(`${LOGOS_PATH}${symbol}.png`)
                resp.push(true)
            }
            catch(e){
                resp.push(false)
            }
            finally{
                if(i >= symbols.length -1)
                    dispatch({ type: 'COINS_LOGO_FETCHED', payload: resp})
            }
        })

        
    }
}