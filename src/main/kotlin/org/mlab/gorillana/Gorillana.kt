package org.mlab.gorillana

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Gorillana

fun main(args: Array<String>) {
	runApplication<Gorillana>(*args)
}
