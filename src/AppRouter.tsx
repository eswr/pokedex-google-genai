import { HashRouter, Route, Routes } from "react-router";

import { PokedexLayout } from "./layouts/PokedexLayout";
import { PaginatedPage } from "./pages/paginated-page/PaginatedPage";
import { PokemonPage } from "./pages/pokemon-page/PokemonPage";
import { ZenPacificOrlandoPage } from "./pages/zen-pacific-orlando-page/page";
import { HotelLayout } from "./layouts/HotelLayout";

export const AppRouter = () => {
	return (
		<HashRouter>
			<Routes>
				<Route element={<HotelLayout />}>
					<Route path="/" element={<ZenPacificOrlandoPage />} />
				</Route>
				<Route element={<PokedexLayout />}>
					<Route path="/pokemons" element={<PaginatedPage />} />
					<Route path="/pokemons/:nameOrId" element={<PokemonPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
};
