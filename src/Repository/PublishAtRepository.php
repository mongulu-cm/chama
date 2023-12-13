<?php

namespace App\Repository;

use App\Entity\PublishAt;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PublishAt>
 *
 * @method PublishAt|null find($id, $lockMode = null, $lockVersion = null)
 * @method PublishAt|null findOneBy(array $criteria, array $orderBy = null)
 * @method PublishAt[]    findAll()
 * @method PublishAt[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PublishAtRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PublishAt::class);
    }

//    /**
//     * @return PublishAt[] Returns an array of PublishAt objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PublishAt
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
