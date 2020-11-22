import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  const tempItems = items.map(item => {
    return item.node.category
  })

  const tempCategories = new Set(tempItems)
  const categories = Array.from(tempCategories)
  return ["all", ...categories]
}

function Menu({ items: { edges: items } }) {
  const [coffeeItems, setCoffeeItems] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCoffeeItems(items)
    setCategories(getCategories(items))
  }, [items])

  const handleItems = category => {
    if (category === "all") {
      setCoffeeItems(items)
    } else {
      const filteredItems = items.filter(
        ({ node }) => node.category === category
      )
      setCoffeeItems(filteredItems)
    }
  }

  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row mb-5">
            {/* categories */}
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => handleItems(category)}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
            {/* items */}
            <div className="row">
              {coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-6 my-3 d-flex mx-auto"
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-0">
                          <small>{node.title}</small>
                        </h6>
                        <h6 className="mb-0 text-yellow">
                          <small>${node.price}</small>
                        </h6>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
