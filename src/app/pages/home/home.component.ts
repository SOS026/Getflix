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

  ngOnInit(): void {
      this.bannerData();
  }

  bannerData(){
    this.movieService.bannerApiData()
    .subscribe(res=>{
      console.log(res, 'bannerresult#');
      this.bannerResult = res.results;
    });
  }

}
