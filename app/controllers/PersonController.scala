package controllers

import play.api._
import play.api.mvc._

import scala.concurrent.{ ExecutionContext, Future }

object PersonController extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

}
