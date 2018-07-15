<?php

namespace App\Http\Controllers;

// use Illuminate\Http\Request;
use App\Listing;

class ListingController extends Controller
{
    /**
     * @param $model
     * @param $id
     * @return mixed
     */
    public function add_image_urls($model, $id)
    {
        for ($i = 1; $i <= 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $id . '/Image_' . $i . '.jpg'
            );
        }

        return $model;
    }

    /**
     * @param Listing $listing
     * @return \Illuminate\Http\JsonResponse
     */
    public function get_listing_api(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);

        return response()->json($model);
    }

    /**
     * @param Listing $listing
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function get_listing_web(Listing $listing)
    {
        $model = $listing->toArray();
        $model = $this->add_image_urls($model, $listing->id);

        return view('app', ['model' => $model]);
    }
}
