import React, { Component } from 'react'

import imageA from './../img/venom-1.jpg';
import imageB from './../img/hulk-1.jpg';
import imageC from './../img/venom-2.jpg';


export class Header extends Component {
    render() {
        return (
            <div>
                <header class="header">
                    <div class="container">
                        <h1 class="title">Mavel's Fearless</h1>
                        <p class="subtitle">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. beatae
                            molestias earum eveniet.
                        </p>
            
                        <div className="search-bar">
                            <input type="search" placeholder="marvel" />
                        </div>
                            {/* sample wallpaper */}
                        <div className="sample-wallpaper">
                             {/* wallpaper #1 */}
                            <article className="wallpaper">
                                <img 
                                    src={imageA} 
                                    alt="Wallpaper #1" 
                                    class="wallpaper" 
                                />
                            </article>
                            {/* wallpaper #2 */}
                            <article className="wallpaper">
                                <img 
                                    src={imageB}
                                    alt="Wallpaper #1"
                                    class="wallpaper" 
                                />
                            </article>
                            {/* wallpaper #3 */}
                            <article className="wallpaper">
                                <img 
                                    src={imageC} 
                                    alt="Wallpaper #1" 
                                    class="wallpaper"
                                 />
                            </article>
                        </div>
                        
                    </div>
                </header>
            </div>
        )
    }
}

export default Header

