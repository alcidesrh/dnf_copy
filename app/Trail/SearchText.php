<?php
namespace App\Trail;

trait SearchText
{

    public function searchTerm(&$query, $search, $fields = ['name', 'last_name', 'email', 'phone']){

        $searchTerms = array_filter( explode(" ", $search), function ($value) {
                return !empty($value);
            });
            
            $query
            ->where(function ($query) use ($searchTerms, $fields) {
                
                foreach ( $fields as $attribute) {
                    foreach ($searchTerms as $searchTerm) {
                        $sql = "LOWER({$attribute}) LIKE ?";
                        $searchTerm = mb_strtolower($searchTerm, 'UTF8');
                        $query->orWhereRaw($sql, ["%{$searchTerm}%"]);
                    }
                }
            });
            

    }
}