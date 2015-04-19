/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function AlumnosController($scope) {
    $scope.alumnos = [
        {
            nombre: 'David Cadenas',
            telefono: '2093029',
            curso: "Diplomado java"
        },
        {
            nombre: 'Hen Qui',
            telefono: '2093029',
            curso: "Oftalmologo"
        },
        {
            nombre: 'Iris Cadenas',
            telefono: '2093029',
            curso: "Civil Engineer"
        },
        {
            nombre: 'Gusta Seg',
            telefono: '2093029',
            curso: "Empresario"
        }
    ];

    $scope.save = function() {
        $scope.alumnos.push({
            nombre: $scope.nuevoAlumno.nombre,
            telefono: $scope.nuevoAlumno.telefono,
            curso: $scope.nuevoAlumno.curso
        });
        $scope.formVisibility = false;
        console.log($scope.formVisibility);
    };
    $scope.formVisibility = false;

    $scope.showform = function() {
        $scope.formVisibility = true;
        console.log($scope.formVisibility);
    };

}
