import { NgModule } from "@angular/core";
import {Router, RouterModule, Routes} from "@angular/router";
import { FirstComponentComponent } from "../components/first-component/first-component.component";
import { ListRenderComponent } from "../components/list-render/list-render.component";
import { TwoWayBindingComponent } from "../components/two-way-binding/two-way-binding.component";
import { PipesComponent } from "../components/pipes/pipes.component";
import { IfRenderComponent } from "../components/if-render/if-render.component";
import { ItemDetailComponent } from "../components/item-detail/item-detail.component";

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path : 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent },
  {path: 'pipe', component: PipesComponent},
  {path: 'twoWay', component: TwoWayBindingComponent},
  {path: 'ifRender', component: IfRenderComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)], //quer dizer que as rotas começam da raiz do site (forRoot, mas em ingles mesmo deveria ter sido from Root e nao forRoot mas né é assim que tá na linguagem)
  exports: [RouterModule]
})

export class AppRoutingModule{}