package main

import (
	"fmt"

	"github.com/joho/godotenv"
)

func main() {
 err := godotenv.Load();

 if err != nil {
   fmt.Print("ENV not loaded might be production")
 }
}