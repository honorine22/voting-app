import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div class="card shadow p-3 mb-5 bg-body rounded" style="width:20rem;">
            <img src="https://www.dropbox.com/s/5xp7sy21sqb6jm4/ImageCap.jpg?raw=1" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <Link href="#" class="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
}

export default Card;