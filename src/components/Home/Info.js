import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              explicabo aspernatur voluptatem reiciendis commodi vel dolorem,
              esse quos nostrum atque repudiandae quisquam et laudantium autem
              nam incidunt veniam iusto, cumque aliquid excepturi sit voluptatum
              tempora eius facilis! Voluptatum quibusdam facilis mollitia eos.
              Labore iste voluptate tenetur earum odit quas molestiae!
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
