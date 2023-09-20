import React, { useState, useEffect, useRef } from "react"
import { useDrag, useDrop, DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import NavBar from "../components/Navbar"

const Gallery = () => {
  const initialImages = [
    {
      id: 238,
      src: "https://image.tmdb.org/t/p/w500/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
      title: "The Godfather",
    },
    {
      id: 278,
      src: "https://image.tmdb.org/t/p/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      title: "The Shawshank Redemption",
    },
    {
      id: 240,
      src: "https://image.tmdb.org/t/p/w500/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      title: "The Godfather Part II",
    },
    {
      id: 424,
      src: "https://image.tmdb.org/t/p/w500/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
      title: "Schindler's List",
    },
    {
      id: 19404,
      src: "https://image.tmdb.org/t/p/w500/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
      title: "Dilwale Dulhania Le Jayenge",
    },
    {
      id: 389,
      src: "https://image.tmdb.org/t/p/w500/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
      title: "12 Angry Men",
    },
    {
      id: 129,
      src: "https://image.tmdb.org/t/p/w500/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      title: "Spirited Away",
    },
    {
      id: 496243,
      src: "https://image.tmdb.org/t/p/w500/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
      title: "Parasite",
    },
    {
      id: 372058,
      src: "https://image.tmdb.org/t/p/w500/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
      title: "Your Name.",
    },
    {
      id: 155,
      src: "https://image.tmdb.org/t/p/w500/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
      title: "The Dark Knight",
    },
    {
      id: 497,
      src: "https://image.tmdb.org/t/p/w500/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
      title: "The Green Mile",
    },
    {
      id: 680,
      src: "https://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      title: "Pulp Fiction",
    },
    {
      id: 13,
      src: "https://image.tmdb.org/t/p/w500/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
      title: "Forrest Gump",
    },
    {
      id: 122,
      src: "https://image.tmdb.org/t/p/w500/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
      title: "The Lord of the Rings: The Return of the King",
    },
    {
      id: 429,
      src: "https://image.tmdb.org/t/p/w500/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
      title: "The Good, the Bad and the Ugly",
    },
    {
      id: 769,
      src: "https://image.tmdb.org/t/p/w500/sw7mordbZxgITU877yTpZCud90M.jpg",
      title: "GoodFellas",
    },
    {
      id: 11216,
      src: "https://image.tmdb.org/t/p/w500/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
      title: "Cinema Paradiso",
    },
    {
      id: 637,
      src: "https://image.tmdb.org/t/p/w500/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
      title: "Life Is Beautiful",
    },
    {
      id: 346,
      src: "https://image.tmdb.org/t/p/w500/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
      title: "Seven Samurai",
    },
    {
      id: 12477,
      src: "https://image.tmdb.org/t/p/w500/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
      title: "Grave of the Fireflies",
    },

    {
      id: 1008042,
      src: "https://image.tmdb.org/t/p/w500/55Rb9qt3yzyF4KQpC1c3T3Fbcao.jpg",
      title: "Talk to Me",
    },
    {
      id: 385687,
      src: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      title: "Fast X",
    },
    {
      id: 346698,
      src: "https://image.tmdb.org/t/p/w500/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
      title: "Barbie",
    },
    {
      id: 615656,
      src: "https://image.tmdb.org/t/p/w500/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg",
      title: "Meg 2: The Trench",
    },
    {
      id: 968051,
      src: "https://image.tmdb.org/t/p/w500/53z2fXEKfnNg2uSOPss2unPBGX1.jpg",
      title: "The Nun II",
    },
    {
      id: 717930,
      src: "https://image.tmdb.org/t/p/w500/c6Splshb8lb2Q9OvUfhpqXl7uP0.jpg",
      title: "Kandahar",
    },
    {
      id: 976573,
      src: "https://image.tmdb.org/t/p/w500/4fLZUr1e65hKPPVw0R3PmKFKxj1.jpg",
      title: "Elemental",
    },
    {
      id: 335977,
      src: "https://image.tmdb.org/t/p/w500/9m161GawbY3cWxe6txd1NOHTjd0.jpg",
      title: "Indiana Jones and the Dial of Destiny",
    },
    {
      id: 667538,
      src: "https://image.tmdb.org/t/p/w500/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
      title: "Transformers: Rise of the Beasts",
    },
    {
      id: 678512,
      src: "https://image.tmdb.org/t/p/w500/waBWlJlMpyFb7STkFHfFvJKgwww.jpg",
      title: "Sound of Freedom",
    },
    {
      id: 614930,
      src: "https://image.tmdb.org/t/p/w500/w2nFc2Rsm93PDkvjY4LTn17ePO0.jpg",
      title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    },
    {
      id: 298618,
      src: "https://image.tmdb.org/t/p/w500/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
      title: "The Flash",
    },
    {
      id: 569094,
      src: "https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
      title: "Spider-Man: Across the Spider-Verse",
    },
    {
      id: 820525,
      src: "https://image.tmdb.org/t/p/w500/jkKVLzLWjSvTnc84VzeljhSy6j8.jpg",
      title: "After Everything",
    },
    {
      id: 565770,
      src: "https://image.tmdb.org/t/p/w500/1syW9SNna38rSl9fnXwc9fP7POW.jpg",
      title: "Blue Beetle",
    },
    {
      id: 606403,
      src: "https://image.tmdb.org/t/p/w500/3mYCjwll5RG342Dz1f8HcnT8tV.jpg",
      title: "Special Delivery",
    },
    {
      id: 990140,
      src: "https://image.tmdb.org/t/p/w500/rV56FkcHkzHJcBOOqoCeSDnoBff.jpg",
      title: "Sakra",
    },
    {
      id: 439079,
      src: "https://image.tmdb.org/t/p/w500/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
      title: "The Nun",
    },
    {
      id: 734253,
      src: "https://image.tmdb.org/t/p/w500/2QL5j6mB4ZpyBcVr0WO9H9MQGBu.jpg",
      title: "Adipurush",
    },
    {
      id: 447277,
      src: "https://image.tmdb.org/t/p/w500/AeR5k8Sp3zc2Ql4tT6CmgqspsEq.jpg",
      title: "The Little Mermaid",
    },
  ]

  let [images, setImages] = useState([])
  useEffect(() => {
    setImages(initialImages.sort((a, b) => a.id - b.id))
  }, [])
  //  set boundary for dragging something tha inst an image

  const [firstIndex, setFirstIndex] = useState("")
  const [imageBeingDraggedSrc, setImageBeingDaraggedSrc] = useState("")

  const imgRef = useRef(null)

  const handleTouchStart = (e, index) => {
    // e.preventDefault()
    setFirstIndex(index)
  }

  const handleTouchEnd = (e, index) => {
    const el = e.target
    //  console.log(e, el.id, index)
  }

  const handleTouchStartGallery = (e) => {
    if (e.nodeName === "IMG") {
      setFirstIndex(e.target.getAttribute("i"))
      console.log(e.target.getAttribute("src"))
      // setImageBeingDaraggedSrc(e.target.getAttribute("src"))
      console.log(e)
    }
  }

  const handleTouchEndGallery = (e, index) => {
    const elementAtPoint = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    )
    console.log(elementAtPoint.tagName.toUpperCase())
    if (elementAtPoint.tagName.toUpperCase() === "IMG") {
      const tempIndex = elementAtPoint.getAttribute("i")

      const updatedImages = [...images]

      const temp = updatedImages[firstIndex]

      updatedImages[firstIndex] = updatedImages[tempIndex]

      updatedImages[tempIndex] = temp

      setImages(updatedImages)
    }
    console.log("not dropped on image")
  }

  const handleElementDrag = (e) => {
    // handle the image being dragged
  }

  // laptop drag
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e, newIndex) => {
    e.preventDefault()
    const oldIndex = e.dataTransfer.getData("index")

    // Create a copy of the images array
    const updatedImages = [...images]

    // Swap the images at oldIndex and newIndex
    const temp = updatedImages[oldIndex]
    console.log(temp, updatedImages[newIndex], "things to swap")
    updatedImages[oldIndex] = updatedImages[newIndex]
    // console.log(updatedImages[newIndex])
    updatedImages[newIndex] = temp
    // console.log(updatedImages[newIndex])

    setImages(updatedImages)
    console.log(images)
  }

  // like a copy of the pic following you
  // how about actually making a copy of the pics and having it follow the point i  am dragging

  return (
    <div className="gallery flex justify-center relative">
      <NavBar data={images} />
      <div
        className="gallery__grid grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-y-8 gap-y-4 lg:gap-y-12 relative top-12 max-w-100vw overflow-hidden"
        onTouchStart={(e) => handleTouchStartGallery(e)}
        onTouchEnd={(e) => handleTouchEndGallery(e)}
      >
        {images.map((image, index) => (
          <div key={image.id}>
            <img
              className="aspect-[500/280]  lg:m-8 flex-1 lg:w-[20vw] md:w-[28vw] md:m-4 w-[40vw] m-4 "
              src={image?.src}
              // key={image.id}
              id={image.id}
              i={index}
              ref={imgRef}
              alt={`img`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              // touch drag

              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
              onTouchMove={handleElementDrag}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
