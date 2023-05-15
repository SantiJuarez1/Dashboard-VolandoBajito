import React from 'react';
import LastDestinyInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last destiny in DB -->*/}
            <LastDestinyInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <GenresInDb />

        </div>
    )
}

export default ContentRowCenter;