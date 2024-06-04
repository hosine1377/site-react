import axios from 'axios'
import { useEffect, useState } from 'react'
const Product = () => {
  const [posts, setPosts] = useState<[]>([])
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
  }, [])
  return (
    <div>
      <h2>Product</h2>
    </div>
  )
}
export default Product
