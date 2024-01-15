import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private movieService: MovieApiService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;


  ngOnInit(): void {
    let getParamId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any){
    this.movieService.getMovieDetails(id)
    .subscribe(res=>{
      console.log(res, 'getmoviedetails#');
      this.getMovieDetailResult = res;
    });
  }

  getVideo(id: any)
  {
    this.movieService.getMovieVideo(id)
    .subscribe(res=>{
      console.log(res, 'getMovieVideos#');
      res.results.forEach((element: any)=>{
        if (element.type === "Trailer")
        {
      this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id:any)
  {
    this.movieService.getMovieCast(id)
    .subscribe(res=>{
      console.log(res, 'movieCast#');
      this.getMovieCastResult = res.cast;
    })
  }

}
