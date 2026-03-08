@echo off
echo =========================================================
echo    ACTUALIZADOR AUTOMATICO DE GALERIA - JPLUXURY
echo =========================================================
echo.
echo Detectando imagenes nuevas en la carpeta "src\assets\galeria"...

powershell.exe -ExecutionPolicy Bypass -Command "$files = Get-ChildItem -Path 'src\assets\galeria' -File -Include *.jpg,*.jpeg,*.png,*.webp -Recurse; $imgArray = @(); if ($files) { foreach ($f in $files) { $imgArray += '../assets/galeria/' + $f.Name } }; $json = $imgArray | ConvertTo-Json -Compress; if ($json -eq $null -or $json -eq '') { $json = '[]' }; $jsContent = 'const GALERIA_IMAGES = ' + $json + ';'; Set-Content -Path 'src\js\galeria-info.js' -Value $jsContent -Encoding UTF8"

echo.
echo [OK] La galeria ha sido actualizada exitosamente con los archivos encontrados.
echo Puedes abrir tu pagina web (galeria.html) para ver los cambios.
echo.
pause
