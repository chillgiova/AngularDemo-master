import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ElencoLibriComponent } from "./components/elenco-libri/elenco-libri.component";
import { DettaglioLibroComponent } from "./components/dettaglio-libro/dettaglio-libro.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
const routes : Routes = [
    {path: '', component: ElencoLibriComponent},
    {path:'libro/:id', component: DettaglioLibroComponent},
    {path: '**', component: NotFoundComponent}

];
routes.push({ path: '', component: ElencoLibriComponent });

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
