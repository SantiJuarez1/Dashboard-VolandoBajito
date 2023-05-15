import React from 'react';

// Credenciales de API
const apiKey = '7581f363'; // Intenta poner cualquier cosa antes para probar

function SearchMovies() {
	const [movies, setMovies] = React.useState([]);
	const [keyword, setKeyword] = React.useState('');

	const getData = () => {
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
			.then(res => res.json())
			.then(data => {
				if (data.Error) {
					setMovies([]);
				} else {
					setMovies(data.Search);
				}
			})
			.catch(err => console.log(err));
	};

	React.useEffect(() => {
		getData();
	}, []);

	const handleSearch = (e) => {
		e.preventDefault();
		getData();
	};

	const onChangeInput = e => {
		setKeyword(e.target.value);
	};

	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form onSubmit={handleSearch}>
									<div className="form-group">
										<label htmlFor="">Buscar por nombre:</label>
										<input type="text" className="form-control" onChange={onChangeInput}/>
									</div>
									<button className="btn btn-info"><i class="fas fa-fw fa-search"></i></button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Productos para la palabra: {keyword}</h2>
							</div>
							{/* Listado de productos */}
							{
								movies?.length > 0 && movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3">
													<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center">
														<img
															className="img-fluid px-3 px-sm-4 mt-3 mb-4"
															src={movie.Poster}
															alt={movie.Title}
															style={{ width: '90%', height: '400px', objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									)
								})
							}
						</div>
						{movies?.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
