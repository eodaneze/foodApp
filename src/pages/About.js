import React from 'react'
import DynamicHero from '../components/DynamicHero'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
       <div className="container-xxl position-relative p-0">
				<Navbar />
				<DynamicHero page={"About"}/>
			</div>

      <main class="container mt-4">
				<section>
					<h1 className="display-4 text-center text-primary">About Us</h1>
					<p className="lead text-center fw-bold">
						Welcome to Your Company, where we strive for excellence in
						everything we do.
					</p>
					<p className="text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
						hendrerit augue vel ex convallis, ac tincidunt purus scelerisque.
						Integer quis diam at neque hendrerit consequat. Nullam nec mi vitae
						justo accumsan consectetur. In vel orci vel leo fermentum efficitur.
						Curabitur fermentum, odio non cursus eleifend, velit libero commodo
						libero, id sollicitudin dolor purus eget velit.
					</p>
					<p className="text-justify">
						Phasellus in justo nec purus malesuada dignissim. Sed vehicula,
						velit non feugiat aliquet, arcu velit tempus tortor, id dapibus quam
						ante a velit. Sed gravida vel odio ac bibendum. Suspendisse potenti.
						Quisque vehicula, elit et congue euismod, velit metus luctus nulla,
						eu tincidunt odio velit sit amet purus. Proin vitae sapien vel felis
						elementum facilisis eget in justo.
					</p>
          <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quibusdam id est vero, odio, dicta pariatur voluptatem odit quidem officia molestias quisquam corrupti harum natus recusandae assumenda aliquid. Nam distinctio ab architecto pariatur dolorem, omnis molestiae amet eligendi tempore corrupti et placeat tempora temporibus eveniet consequatur itaque ad explicabo laboriosam maiores voluptas provident. Ad magnam eligendi, qui laudantium deserunt similique ipsum vero laboriosam explicabo minima. Libero aut voluptatem natus, ex veritatis aliquid vel quibusdam nesciunt amet assumenda, nisi aperiam? Voluptate, ex tenetur modi similique vitae praesentium quis sunt est, at eos expedita! Facilis itaque harum tempore quae numquam vitae modi?</p>
				</section>
			</main>
    </div>
  )
}

export default About