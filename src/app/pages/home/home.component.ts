import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieApiService) { }

  bannerResult: any =[];
  trendingMovieResult: any =[];
  actionMovieResult: any =[];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any =[];
  documentaryMovieResult: any =[];
  sciencefictionMovieResult: any =[];
  thrillerMovieResult: any =[];


  ngOnInit(): void 
  {
      this.bannerData();
      this.trendingData();
      this.actionMovie();
      this.adventureMovie();
      this.animationMovie();
      this.comedyMovie();
      this.documentaryMovie();
      this.sciencefictionMovie();
      this.thrillerMovie();

  }

  bannerData()
  {
    this.movieService.bannerApiData()
    .subscribe(res=>{
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
    });
  }

  trendingData()
  {
    this.movieService.trendingMovieApiData()
    .subscribe(res=>{
      console.log(res, 'trendingresult#');
      this.trendingMovieResult = res.results;
    });
  }

  actionMovie()
  {
    this.movieService.fetchActionMovies()
    .subscribe(res=>{
      console.log(res, 'actionmovies#');
      this.actionMovieResult = res.results;
    });
  }

  adventureMovie()
  {
    this.movieService.fetchAdventureMovies()
    .subscribe(res=>{
      this.adventureMovieResult = res.results;
    });
  }

  animationMovie()
  {
    this.movieService.fetchAnimationMovies()
    .subscribe(res=>{
      this.animationMovieResult=res.results;
    });
  }

  comedyMovie()
  {
    this.movieService.fetchComedyMovies()
    .subscribe(res=>{
      this.comedyMovieResult=res.results;
    });
  }

  documentaryMovie()
  {
    this.movieService.fetchDocumentryMovies()
    .subscribe(res=>{
      this.documentaryMovieResult=res.results;
    });
  }

  sciencefictionMovie()
  {
    this.movieService.fetchScienceFictionMovies()
    .subscribe(res=>{
      this.sciencefictionMovieResult=res.results;
    });
  }

  thrillerMovie()
  {
    this.movieService.fetchThrillerMovies()
    .subscribe(res=>{
      this.thrillerMovieResult=res.results;
    });
  }

}
