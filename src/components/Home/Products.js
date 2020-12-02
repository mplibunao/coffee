import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { useStaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const data = useStaticQuery(getProducts)

  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data.products.edges.map(({ node: product }) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Products
