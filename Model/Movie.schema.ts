import mongoose from 'mongoose';

const movie_schema = new mongoose.Schema
    ({
        title: String,
        description: String,
        releaseDate: Date,
        category: String,
        actors: [{ name: String }],
        image: String,
        ratings: [{value: {type: Number,min: 0,max: 10,}}],
        comments:[{text: String,}],
        addedBy: String,

    })

export const Movie = mongoose.model("Movie", movie_schema)