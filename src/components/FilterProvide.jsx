
import { createContext,useContext,useState, } from 'react'
const FitlerContext = createContext({
  searchQuery:"",
  setSearchQuery:()=>{},
  selectedCategory:"",
  setSelectedCategory:()=>{},
  minPrice:undefined,
  setMinPrice:()=>{},
  maxPrice:undefined,
  setMaxPrice:()=>{},
  keyword:"",
  setKeyword:()=>{}
  
})
const FilterProvider = ({children}) => {
 const [searchQuery,setSearchQuery]= useState("")
 const [selectedCategory,setSelectedCategory] = useState("")
 const [minPrice,setMinPrice] = useState(undefined)
 const [maxPrice,setMaxPrice] = useState(undefined)
 const [keyword,setKeyword] = useState("")

  return (
    <FitlerContext.Provider
    value={{ searchQuery, setSearchQuery,selectedCategory,setSelectedCategory,minPrice,setMinPrice,maxPrice,setMaxPrice,keyword,setKeyword }}
  >
    {children}
  </FitlerContext.Provider>
  )
}

export { FitlerContext, FilterProvider,useFilter };
 const useFilter =() =>{
  const context = useContext(FitlerContext)
  if(context===undefined){
    throw new Error("useFilter must be used within a FilterProvider")
  }
  return context;
}