import { Component, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMap, MapCircle, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

@Input() projects:Project[] = []
@Output() select = new EventEmitter<Project>()

@ViewChildren(MapInfoWindow) infoWindows: QueryList<MapInfoWindow>;
@ViewChild(GoogleMap) map!: GoogleMap;
constructor(){}
center:google.maps.LatLngLiteral
isShowDetails = false
ngOnInit(): void {
navigator.geolocation.getCurrentPosition((p:any)=>{
this.center = {lat:p.coords.latitude,lng:p.coords.longitude}
})

}



markerPositions: google.maps.LatLngLiteral[] = [];

zoom = 4;

openInfoWindow(marker: MapMarker,i:number) {
    // this.infoWindows[i].open(marker)
    this.infoWindows.forEach((window:any,idx:any)=>{
      if(idx==i) window.open(marker)
    });
}

  showDetails(project:Project){
    this.select.emit(project)
  }

detailesIndex = 0;
// @ViewChild(MapCircle) circle: MapCircle;
// radiusChanged(){
//     if(this.circle){
//       console.log(this.circle.getRadius());
//     }
//   }
  getPosition(project:Project):google.maps.LatLngLiteral{

    let value =  {lat: project.latitude,lng: project.longitude}
    console.log(value)
    return value
    
  }

ngAfterViewInit(){
}

}
