import React, { useState } from 'react'
import "./Toggle.css"
import img1 from './moon.png'
import img2 from './your-turn-collage.jpg'

const Toggle = () => {
    const [on, setOn] = useState(false);
    const handleClick = () => {
        setOn(!on);
    }
    console.log(on, setOn);
    return (
        <div className={`full-body ${on ? "show" : ""}`}>
            <div onClick={handleClick} className="toggle">
                <img className={`icon ${on ? "show" : ""}`} src={img1}></img>
            </div>
            <div className={`little-stories ${on ? "show" : ""}`}>
                <h1>The Eerie Attic</h1>
                <div className="little-stories-content">
                    <img src={img2}></img>
                    <p className="content">
                        Before Reddit.com user Digsdaws got down to recounting their scariest of ghost stories—about living in a place that was obviously teaming with honest-to-goodness members of the spiritual world—they pointed out the irony of ghost stories that begin with the phrase, “I don’t believe in ghosts, but …” After all, no matter how a ghost story begins, it always hinges on the notion that, come on, of course we believe in ghosts!

                        “A few years ago, I moved into a one-bedroom apartment in Melbourne, Australia,” they went on to recall. “It was my first time living on my own. The apartment block had been built in the 1930s. I’d been there for a few months when I came home from work one day and went into the bathroom. I saw something strange: A wooden board, which had covered a hole in the ceiling that led to a small attic space, lay fractured in two pieces on the ground. I examined the pieces. The board was an inch thick, and it would have taken Bruce Lee to break it. I thought the landlord had sent someone to work on the attic. I was frozen stiff with fear. Someone is up there for sure, I thought.

                        “I emailed pictures to the landlord, asking if anyone had been there (with an undertone of annoyance, since she hadn’t warned me). Her reply read, ‘Please call me as soon as you are able to.’ I called, and she explained that her last two tenants had said the same thing happened. She promised to replace the board, and she did.

                        “A month later, I woke up one night around 4 a.m. My body was covered in goose bumps. It felt like someone was rubbing his or her hands on me. Everything was silent, but then I heard a dragging sound coming from above my bed. It was as if someone was pulling a sack of potatoes. I froze, convinced someone was up there. There is no way an animal could make that sound. After five minutes, I worked up the courage to turn on the light, armed myself with a cricket bat and walked to the bathroom.

                        “That’s when I saw that the new board covering the hole was broken in two! I felt sick. The dragging sound had stopped. But I heard something else: whispering. The sound was clear and coming from the attic. It sounded like children’s voices, and I could hear one sentence repeated over and over: ‘It’s your turn … It’s your turn …’

                        “I switched on every light in the apartment to make things feel normal. It was 5 a.m. and dark outside. I watched TV to try to unwind. Then a fuse blew. My pet budgie, Dexter, whom I kept in the kitchen, usually never made a sound at night, but he started squawking like he was being strangled. I’d never heard him make those sorts of noises—he was screaming. I grabbed my car keys, ran out, sat in my car and waited there until the sun came up.

                        “When I saw people walking their dogs, this comforted me enough to go back in. The front door was open, but I figured I might’ve forgotten to close it when I ran out. I went to the kitchen to check on Dexter, but he wasn’t in his cage.

                        “I felt sick again. All my windows were closed, so I looked everywhere inside. When I walked to the bathroom, I heard splashing. Dexter was half drowned in the toilet! I took him out, washed him and dried him. I was so confused. At 8 a.m., I called the landlord and gave her a watered-down version of the night. ‘Oh, wow, you heard the whispering too!’ she said.

                        “I stayed in that apartment for another 18 months. I heard the whispering on a few occasions, and twice the board covering the hole in the ceiling moved. Although I live elsewhere now, the landlord recently called. She said that her new tenants had begged to speak with me about some of the stuff that’s been going on there. Forget it—it’s their problem now.“

                        Now that you’ve got the chills, browse these Halloween quotes for more scares.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Toggle