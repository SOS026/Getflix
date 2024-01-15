import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiService } from '../service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService: MovieApiService ) { }

  ngOnInit(): void {
      
  }

  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.movieService.getSearchMovie(this.searchForm.value)
    .subscribe(res=>{
      console.log(res,'searchmovie##');
      this.searchResult = res.results;
      
    });
    
  }

}
