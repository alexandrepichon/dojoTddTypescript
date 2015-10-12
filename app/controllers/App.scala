package controllers

import play.api._
import play.api.mvc._

import scala.concurrent.{ ExecutionContext, Future }

object App extends Controller {

  def index = controllers.Assets.versioned(path="/public", file= "index.html")

}
