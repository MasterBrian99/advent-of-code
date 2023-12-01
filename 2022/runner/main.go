package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {

	var fileName = os.Args[1]
	dat, err := os.ReadFile(fileName)
	check(err)
	var strList = strings.Trim(string(dat), "")

	for i := 0; i < len(strings.Split(strList, "\n\n")); i++ {
		fmt.Println(string(strings.Split(strList, "\n\n")[i]))
	}

}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
